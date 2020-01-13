import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-templates",
  templateUrl: "./templates.component.html",
  styleUrls: ["./templates.component.css"]
})
export class TemplatesComponent implements OnInit {
  javaBackendUrl = "http://localhost:8080";
  templates = {};
  scope = {};
  items = ["Default", "Bubbly", "Colorful", "Fun", "Hank"];
  class = "";
  userName = "";

  @Input() formStyle = "default";
  @Input() templateStyle = "shown";
  @Input() templateCreatedStyle = "hidden";
  @Input() bodyClass = "";
  @Input() templateLines = [];

  constructor(private http: HttpClient) {}

  selectedItemChanged = function(event) {
    this.formStyle = event.target.value;
  };
  getTemplates() {
    this.http.get(this.javaBackendUrl).subscribe(data => {
      this.templates = data;
    });
  }

  ngOnInit() {
    this.getTemplates();
  }

  templateOutput = `<head>
  <script type="text/javascript" src="https://smtpjs.com/v3/smtp.js"></script>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src='https://www.google.com/recaptcha/api.js'></script>
  <script type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/openpgp/4.6.2/compat/openpgp.min.js"></script>
</head>

<div class="templateComponent">

  <body>
      <div class="${this.templateStyle}">
      <script type="text/javascript">
          function onSubmitHandler() {
              event.preventDefault();
              const pubkey = '-----BEGIN PGP PUBLIC KEY BLOCK-----\n' +
                  'Version: Mailvelope v4.2.0\n' +
                  'Comment: https://www.mailvelope.com\n' +
                  '\n' +
                  'xsFNBF4UDpABEADYajy1hKt1ZS7psliWR2lTrdjOj+iUjiEvvDhsmHYYIKxx' +
                  '60446ddT8zX+AdCrTskOKsGw6/DvGbuqXzDhw4eLeIjWY5+O7LDGBHFdauka' +
                  'JtDQCVBNTQKlDzSxMfucbmKVaQTrRFGI4iYXwS5iRChdb0frbpLhiViCZEx3' +
                  '2xLICEdbdYutDV1fX8iDaCFMD/Gz1gT5Tj17IYz442s3V9mQQPUA8ALE2gWh' +
                  '6FMrZFCkoGBhuZHLEvrBcJU4jzhGv+PJR1f2I/BrGxnkq2sTA/6UcsN8eh3D' +
                  'FXL0k2WnKbWlhcmox6q9C2i+6vab1V03Jz/+xCsomndvvaoTYr5gZLUmKuwt' +
                  'qbW8hzcOs0cn+FUWWf1LH3CZOf3ltfjFxvs3Ru7oSFGxbrn+tNeYO8m7gZKt' +
                  '6dGqprQMcZkJfP8gm4xgjV8+W1ev5FTRdfbgjIdDO0zfokQjUL5bhf4UeGT+' +
                  '/p4etF6r1eqcQm00TxukeP9bIrRu+7PnUZgMgDzLSJkizX+rBNwi8B9A9M3b' +
                  'i5cVzsGgnC4vR0PviXnxglp6RCP6WcM/3N9Iwsru8koCv4jynTelLiGSIhaZ' +
                  '/ym6YB8mJsEeZtatIL4RpfSUpgpouz3dkWdQ2ENZVTyXWKgbBqVdaryKBZ0F' +
                  'ozktKopAzqs0mHCjx8KjBe4BMpgTPpAJ6EahkQARAQABzSdNYWNhcmlhIERv' +
                  'dmUgPGN1dGVjcnlwdGlvbkBvdXRsb29rLmNvbT7CwXUEEAEIAB8FAl4UDpAG' +
                  'CwkHCAMCBBUICgIDFgIBAhkBAhsDAh4BAAoJEElgHdOy0Uw6+3YP/RHkzeBm' +
                  'aXg/Z+2xGN/JZma43S2N2Ku5IOVI9tDqnVLRiT2pbn1LhYCYukv06fYaEUaP' +
                  'koth80z7V9BUXxxXf2qdEW3CC/x4temNgm+DZdyB1qmqmyQzj/XxU5QUI+Uk' +
                  'KSrXaVypMyswMGgQX/0OTLtv/1VhTNj8TTpJim9ngJcQb/kO3lPIpvfUKlRy' +
                  'AO+AP+iclfHbLDlSy6eDTG/dVQ0CTqLrOVpYCRF9EyZCi5kmUnhLLX1sGVv2' +
                  '73I7PqPs+GWH6NjUidv+IpvT7z3YDoK+eY6xttFrw7JIsIjMNliy+1o8HfpQ' +
                  'cRAHoolwAW6a6xwKagr1lnUhqfm7lRVMcDmDHDNzXKOuIxTaVec1pLgDK9b7' +
                  'Xv5OeBmxcxTS7Y2+/MZE/HXL6UZLvHVLt2ejEqLcmFzDLdVnJaDTM1pl73PB' +
                  'lOuOFs11E+JuY+yCt2QpTrvKXVl1f1UggZVA/EAu0HbLYtwmtDhqDUrWvTm5' +
                  'e+lqfCs6LlCHJSt9qLIGFQPRB7jiiB5q39aaELXIHJnyu6sWEP2fbj9nWBDZ' +
                  'nD82eMUN2rmJv1ce5XiE8CO0m1UGTawSl9YeWsRtsPzNiuA/i+sKDyYn0Mkw' +
                  '78SYGrqQxjHK+slDHxTC/fI9ywmpzOL8LJka3KTDz+4x3ePTYbtSn73fr8BQ' +
                  'gYl/DMpZGfnG59hBzsFNBF4UDpABEAC7ldy3N4u1Kf2gl349z5OPYTXPHYv4' +
                  '0GJJdQRvCJu0TDaHvLBT1WycklOa07tJgYRzDdLBrzBg9hOvaSlCrzEwTpXh' +
                  'HkGmKilFpHlqHrxttSPO9RJNrJuuiO+AHbgXjNlgzALWQr6HM1xOsQdNl6fb' +
                  'JLst3swEuOrb5h9U1MlBPhoZ3IMPspkjmAHzjivbNkSCWIKOMjgK1IA3B8W1' +
                  'Mo0Uy917qvxrU+uJyq6jSilShV7wq93RiESw7ziEG7Gw269k5AnPWxd6NUkt' +
                  'hJN3HFyR9QNtZvJNuXoy+/Y0pn/H85gMEMTO9ZNMznKJy1ZWfPhZTsweVqsg' +
                  'mVjRmmz4A0ebDgLsGg+0y49Z5sLmuNy0XbdykwZ1KVH3Yqas3OYhMUulby8p' +
                  's11ACYzFk+PIZzdrE6Xk4+g1UMRxWYupH/J98oezKqHm1E1wmPR2/IBIkzU0' +
                  'IhavvgW4LFrvdjffA3RqNgagXkE+ILsyMFoXHeVnu+QCVqO8r6lNggnerGjR' +
                  '6Qug+k0M5miOnPy115iHc535Ni4Xv5HwkPJsIjEMnyB8uXlnPM7vi2j3Xkj1' +
                  'b/m5JRXD2QyzP98g5slM+l0aI5vHyfAj369EsSqiPrzAx0/aWY3ZsmRJAWWa' +
                  '3AJx/2s14QWt2y/hlQ0aAZKJYjfbb9pblLnGvHxRgCSbf1KxCgkIKQARAQAB' +
                  'wsFfBBgBCAAJBQJeFA6QAhsMAAoJEElgHdOy0Uw6RyEP/0xejbkI7EshNFpn' +
                  'Yr6r6vwsvEnaSOPR12Lr0y6IDUEfFlab5Lg9t2l166i6ks0oCcSVaXiJHxKn' +
                  'f3jRZZatTanVyoNvm1ig/Z1LJC17R0qvsg88uqwHqN9aSfXutsx/mHec73YZ' +
                  'wavMQn9MXTQLaY7o5qZAhq/43ldFxgrD8BT2kKN+0GGHrV8Ff1CUd+jO5TgP' +
                  'wSll/+5ceuho6EEiPBORlDfeeeHgKgALFEUWAYjGp6hEh4H1jce6JsRdqSI+' +
                  'Ha5veV/s/ov1mYp6VjwymDpjUgTde+JaZ+GvzPDqwf28BlUdYGpqMPwzYWQ0' +
                  '3JTZbiGGySzUr45jL8mqvvboRI640I4M2kXZXI+y9dGxj6LyJyOowF/A5Xe7' +
                  'z7Llm8Jmnw+ZNOEp++JkWpmA7zQ17zCpcjG58pOMKTQbLAP9ATCzIEkYcyFn' +
                  'ae7crl36TWQJAqY7yqHn4x2k965cdkG7a/L1cWNiZ7BPRtZj6AzdidfppVfV' +
                  'jQ42IpeoNsbJ99aJNZ8cjHrasYcF+UM48MPWb3/hUe22HSO+C5Qlhq0SJF9v' +
                  'F2UBjJhh+rA7vVkbX1vK7O4r1MNCAw/R1spXtXaaea9FwTrpGdY+L3+WEXB+' +
                  '4yzxG4SOgjZ0qpLdZEuFlWZsYUaAPE9b1etKawSSeKL54vNwigvx0dwjRBun' +
                  'UTuR5TPy' +
                  '=gKz7\n' +
                  '-----END PGP PUBLIC KEY BLOCK-----';
              key = openpgp.key.readArmored(pubkey);
              key.then(k => {
                  const options = {
                      message: openpgp.message.fromText($("#Body").val()),       // input as Message object
                      publicKeys: k.keys, // for encryption
                  }

                  openpgp.encrypt(options).then(ciphertext => {
                      encrypted = ciphertext.data // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
                      return encrypted
                  })
                      .then(encrypted => {
                          encryptedLines = encrypted.split("\n")
                          htmlEncryptedMessage = ""
                          encryptedLines.forEach((line) => {
                              htmlEncryptedMessage = htmlEncryptedMessage.concat("<br/>", line);
                          });
                          Email.send({
                              SecureToken: "28415814-75d1-4305-9102-41981722d7ae",
                              To: '${this.userName}',
                              From: "CuteCryption@outlook.com",
                              Subject: "You have an encrypted message from CuteCryption",
                              Body: htmlEncryptedMessage,
                          }).then(
                              message => alert(message)
                          );
                      });
              });

          }
      </script>
      <form class="${this.formStyle}">
          <fieldset>
              <legend>Contact me securely here!</legend>
              <div class="template-container">
                  Body:
                  <textarea id="Body" name="text" style="width:100%; height:100%;">
          </textarea>
                  <!-- Refer to this later to add reCAPTCHA when deployed -->
                  <div class="g-reCAPTCHA" data-sitekey="6LfmIMwUAAAAABx1gGB1bdvM4C_kU6CV1D4zjWjU"></div><br>
                  <input id="submit" type="submit" value="Submit" onclick="onSubmitHandler()">

              </div>
          </fieldset>
      </form>`;

  onClickHandler = function(event) {
    this.templateStyle = "hidden";
    this.templateCreatedStyle = "shown";
    this.bodyClass = "bodyGrown"
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
