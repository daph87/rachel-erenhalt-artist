(() => {
    $(() => {
        let display = "none";
        let chosenImage;
        let chosenIndex;
        let rachelImages = [
            "rachel-ehrenhalt-1",
            "rachel-ehrenhalt-2",
            "rachel-ehrenhalt-3",
            "rachel-ehrenhalt-34",
            "rachel-ehrenhalt-5",
            "rachel-ehrenhalt-6",
            "rachel-ehrenhalt-7",
            "rachel-ehrenhalt-8",
            "rachel-ehrenhalt-9",
            "rachel-ehrenhalt-10",
            "rachel-ehrenhalt-11",
            "rachel-ehrenhalt-12",
            "rachel-ehrenhalt-13",
            "rachel-ehrenhalt-14",
            "rachel-ehrenhalt-15",
            "rachel-ehrenhalt-16",
            "rachel-ehrenhalt-17",
            "rachel-ehrenhalt-18",
            "rachel-ehrenhalt-33",
            "rachel-ehrenhalt-20",
            "rachel-ehrenhalt-21",
            "rachel-ehrenhalt-22",
            "rachel-ehrenhalt-23",
            "rachel-ehrenhalt-24",
            "rachel-ehrenhalt-25",
            "rachel-ehrenhalt-26",
            "rachel-ehrenhalt-27",
            "rachel-ehrenhalt-28",
            "rachel-ehrenhalt-29",
            "rachel-ehrenhalt-30",
            "rachel-ehrenhalt-32",
        ]

        // Display Images when loading the page

        displayImages()


        // Display Menu on mobile
        $("#toggle").click(function () {

            if (display === "none") display = "block";
            else display = "none";

            $(".dropDown").css("display", display);
        })

        // Mobile DropDown
        $('#paintingsDropDown').click(function () {
            $(".container").empty();

            displayImages()
        })

        $("#aboutDropDown").click(function () {
            $(".container").empty();
            showAbout();
        });

        $("#contactDropDown").click(function () {
            $(".container").empty();
            showForm();

        });


        // Menu Functions

        $("#paintingsButton").click(function () {
            $(".container").empty();

            displayImages()

        });

        $("#aboutButton").click(function () {
            $(".container").empty();
            showAbout();

        });

        $("#contactButton").click(function () {
            $(".container").empty();
            showForm();

        });

                //    About Content
                function showAbout() {

                    let about = ` <div class="aboutText">
                    <h6>Rachel Ehrenhalt is a promising plastic arts graduate from the prestigious Bezalel Academy of Art in
                        Jerusalem
                        and is quickly emerging as one of the young new talents in the Israeli art scene. Ehrenhalt uses mainly
                        oil and
                        acrylic paints applied to extra large canvases. The series she presented for her final project at the
                        Bezalel
                        graduate exhibition, which is also the series she’s most identified with, depicts enormous, colorful
                        female
                        characters. Rachel Ehrenhalt draws topics for her art mostly from her memories. <br><br>
         
                        In this series she reminisces on
                        women’s dressing rooms from her infant self’s point of view: a clothing store’s dresser or the locker
                        rooms of
                        the public pool. The walls in the locker rooms are usually covered with mirrors and strong white
                        lighting, so
                        she remembers the women as fields of bright patches of color against a white background. The mirrors
                        duplicate
                        the figures, as does Ehrenhalt. When she paints her memory of the female figures and their duplicates
                        she
                        repeats the duplication. Now, as paintings, they cease to be private occurrences and become a spectacle.
                        Ehrenhalt’s artworks manage to arouse the curiosity of both the eye and the mind. </h6>
                </div>`
        
                    $(".container").removeClass("picturesGroup").html(about);
        
                }

        // Function Display All Images
        function displayImages() {

            rachelImages.map(oneImg => {
                let allImages = `<img id="${oneImg}" class="rachelPicturesTest" src="assets/images/${oneImg}.jpg">`;
                $(".container").addClass("picturesGroup").append(allImages);
            });

        }

        // Modal of pictures when clicking on one picture
        $(".container").on("click", ".rachelPicturesTest", function () {

            chosenIndex = rachelImages.indexOf(this.id);
            chosenImage = this.id;

            let modalBox = `<div class="pictureDiv" id="modalContainerTest"><img class="modalBox" id="${this.id}" class="rachelPicturesTest" src="assets/images/${this.id}.jpg"></div>`
            let button = `<button id="closeModalButton">x</button>`
            let arrowLeft = `<p><i class="arrow right"></i></p>`
            let arrowRight = `<p><i class="arrow left"></i></p>`

            let modalContent = `<div class="modalTest">${arrowLeft}${arrowRight}${button}${modalBox}</div>`
            $(".container").append(modalContent);

            // Switch pictures and close modal via Keyboard
            $(document).keydown(e => {
                if (e.keyCode == 27) {
                    $(".modalTest").css("display", "none");
                }
            });

            $(document).keydown(e => {
                if (e.keyCode == 37) {
                    switchArrowLeft();
                }
            });
            $(document).keydown(e => {
                if (e.keyCode == 39) {
                    switchImageRight();
                }
            });

        });

        // Close Modal of Pictures

        $(".container").on("click", "#closeModalButton", function () {
            $(".modalTest").css("display", "none");
        });

        // View previous Image Function

        $(".container").on("click", ".left", function () {
            switchArrowLeft();
        })

        function switchArrowLeft() {

            let lastImageIndex = rachelImages.length - 1;


            if (chosenIndex === 0) {
                chosenImage = rachelImages[lastImageIndex];

                chosenIndex = lastImageIndex;
            }
            else {
                chosenIndex--;
                chosenImage = rachelImages[chosenIndex];
            }
            let previousPicture = `<img class="modalBox" class="rachelPicturesTest" src="assets/images/${chosenImage}.jpg">`
            $(".pictureDiv").html(previousPicture);
        }


        // View next image function
        $(".container").on("click", ".right", function () {
            switchImageRight();
        });

        function switchImageRight() {

            let lastImageIndex = rachelImages.length - 1;
            if (chosenIndex === lastImageIndex) {
                chosenImage = rachelImages[0];
                chosenIndex = 0;
            }
            else {
                chosenIndex++;
                chosenImage = rachelImages[chosenIndex];
            }
            let previousPicture = `<img class="modalBox" class="rachelPicturesTest" src="assets/images/${chosenImage}.jpg">`
            $(".pictureDiv").html(previousPicture);
        }


        //  Modal Content
        function bootstrapModal(text) {
            let bootModal;
            return bootModal = `   <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" id="closeButton" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>${text}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="closeButton" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`

        }

        // Close Modal Form

        $(".container").on("click", "#closeButton", function () {
            $(".modal").css("display", "none");
        });

                //Form Content
                function showForm() {

                    let newForm = `<div id="form">
                    <h4>Be in touch!</h4>
                                <form>
                                    <div class="form-group">
                                        <input class="form-control" type="text" id="name" name="name" placeholder="Your name">
                                    </div>
                        
                                    <div class="form-group">
                                        <input class="form-control" type="email" id="email" name="email" placeholder="Email" required>
                                        <span id="emailMessage">Your email is required</span>
                                    </div>
                        
                                    <div class="form-group">
                                        <input class="form-control" type="text" id="phone" name="phone" placeholder="Phone number">
                                    </div>
                        
                                    <div class="form-group">
                                        <input class="form-control" type="text" id="subject" name="subject" placeholder="Subject" required>
                                        <span id="subjectMessage">The subject is required</span>
                                    </div>
                        
                                    <div class="form-group">
                                        <textarea class="form-control" id="message" name="message" placeholder="message" required></textarea>
                                        <span id="errorMessage">This field is required</span>
                                    </div>
                                        
                                        <button class="btn btn-dark" id="submit" type="submit" value="Submit">Submit</button>               
                                </form>
                            </div>`
        
                    $(".container").removeClass("picturesGroup").html(newForm);
        
                }

             // Form conditions
             $(".container").on("change", "#message", function () {

                let messageValue = this.value;
                let spanMessage = messageValue ? "" : "This field is required";
                $("#errorMessage").html(spanMessage);
            });
    
            $(".container").on("change", "#email", function () {
    
                let emailValue = this.value;
                let spanEmail = emailValue ? "" : "Your email is required";
                $("#emailMessage").html(spanEmail);
            });
    
            $(".container").on("change", "#subject", function () {
    
                let subjectValue = document.getElementById("subject").value;
                let spanSubject = subjectValue ? "" : "The subject is required";
                $("#subjectMessage").html(spanSubject);
    
            });


        // Submit Form
        $(".container").on("click", "#submit", function () {
            let name = document.getElementById("name").value;
            let message = document.getElementById("message").value;
            let subject = document.getElementById("subject").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;

            let formInputs = {
                message,
                subject,
                name,
                email,
                phone
            };

            if (!message || !subject || !email) {
                let text = "Please fill in the required field"
                let modalWindow = bootstrapModal(text);

                $(".container").append(modalWindow);
            }

            else {
                let text = "Your message has been sent.<br>We will be in contact with you asap"
                let modalWindow = bootstrapModal(text);


                $(".container").append(modalWindow);
                const data = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formInputs)
                };

                fetch('http://localhost:8000/send-email', data);
                window.location.replace("http://localhost:8080/index.html");

            }
        });


    });
})();