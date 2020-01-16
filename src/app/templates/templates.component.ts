import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import openpgp from 'openpgp';
import {saveAs} from 'file-saver';

@Component({
  selector: "app-templates",
  templateUrl: "./templates.component.html",
  styleUrls: ["./templates.component.css"]
})


export class TemplatesComponent implements OnInit {
  
  javaBackendUrl = "https://cutecryption-backend.herokuapp.com/";
  templates = {};
  scope = {};
  items = ["Default", "Bubbly", "Colorful", "Fun", "Hank"];
  class = "";
  userName = "";
  @Input() email = "user@domain.com"
  @Input() formStyle = "default";
  @Input() templateStyle = "shown";
  @Input() templateCreatedStyle = "hidden";
  @Input() bodyClass = "";
  @Input() templateLines = [];
  @Input() selectedTemplate = "";
  @Input() safeHtmlTemplate;
  @Input() templateOutput = "";
  @Input() password = "";
  @Input() publicKey ="";
  @Input() privateKey = "";

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}
  formGroup = new FormGroup({
    email: new FormControl()
 });
  selectedItemChanged = function(event) {
    this.formStyle = event.target.value;
    this.safeHtmlTemplate =  this.sanitizer.bypassSecurityTrustHtml(
      this.templates[event.target.value]["Contents"]
    );
    this.formStyle = this.templates[event.target.value]["Name"]
  };
  getTemplates() {
    this.http.get(this.javaBackendUrl+"?templateName=&email=").subscribe(data => {
      this.templates = data;
      this.safeHtmlTemplate =  this.sanitizer.bypassSecurityTrustHtml(
        this.templates[0]["Contents"]
      );
      this.formStyle = this.templates[0]["Name"]
    });
  }
  ngOnInit() {
    this.getTemplates();
  }

  copyToClipboard = function(event){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.templateOutput;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  downloadPubKey = function(event){
    var blob = new Blob([this.publicKey], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "0x" + this.formStyle +"-pub.asc");

    return false;
  }

  downloadPrivKey = function(event){
    var blob = new Blob([this.privateKey], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "0x" + this.formStyle +"-sec.asc");

    return false;
  }

  
  onClickHandler = async function(event) {
    this.templateStyle = "hidden";
    this.templateCreatedStyle = "shown";
    
    this.bodyClass = "bodyGrown"

    var options = {
      userIds: [{  email:this.email }], // multiple user IDs
      rsaBits: 4096,                                            // RSA key size
      passphrase: this.password         // protects the private key
    };

    var pubkey = ""
    var privkey = "";

    await openpgp.generateKey(options).then(function(key) {
      privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
      pubkey = key.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
      var revocationCertificate = key.revocationCertificate; // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
    });

    this.publicKey = pubkey;
    this.privateKey = privkey;

    this.http.get(this.javaBackendUrl+`?templateName=${this.formStyle}&email=${this.email}`).subscribe(data => {
      
       this.templateOutput=  data[0]["Contents"].replace("##PUBLICKEY##", this.publicKey);
     
    });
    // this.templateLines = this.templateOutput.split("\n");
    // console.log("Did it");
    // this.templateOutput = "";
    // this.templateLines.forEach(line => {
    //   this.templateOutput = this.templateOutput.concat("\n", line);
  };
  userNameChanged = function(event) {
    this.userName = event.target.value;
  };
}