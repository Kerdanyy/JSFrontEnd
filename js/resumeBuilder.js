/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Aly El-Kerdany",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "01223975341",
		"email": "Kerdany@hotmail.co.uk",
		"github": "Kerdanyy",
		"location": "El-Zamalek, Cairo, Egypt"
	},
	"bioPic": "images/profilepic.jpg",
	"welcomeMessage": "I'm currently working as a Software Engineer Intern at Sumerge Software Solutions",
	"skills": ["C#", "C++", "Matlab", "Java", "Software Development", "Android Development"],
	display: function () {

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);

		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);

		if (bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);

			for (var i = 0; i < bio.skills.length; i++) {

				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "German University in Cairo",
			"location": "New Cairo, Cairo, Egypt",
			"degree": "Bachelor of Science",
			"majors": ["Networks"],
			"dates": "2012-2017",
			"url": "https://www.guc.edu.eg"
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"dates": "2018",
			"url": "https://www.udacity.com/course/ud804"
		}
	],
	display: function () {

		if (education.schools.length > 0) {

			for (var i = 0; i < education.schools.length; i++) {

				var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				var formattedNameDegree = formattedName + formattedDegree;

				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formattedNameDegree);

				$('.education-entry:last').append(formattedSchoolDates);
				$('.education-entry:last').append(formattedLocation);


				for (var j = 0; j < education.schools[i].majors.length; j++) {

					var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
					$('.education-entry:last').append(formattedMajor);
				}
			}
		}

		if (education.onlineCourses.length > 0) {

			for (var i = 0; i < education.onlineCourses.length; i++) {

				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedTitleSchool = formattedTitle + formattedSchool;

				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

				$('#education').append(HTMLonlineClasses);
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formattedTitleSchool);

				$('.education-entry:last').append(formattedOnlineDates);
				$('.education-entry:last').append(formattedUrl);

			}
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "Sumerge Software Solutions",
			"title": "Software Engineer Intern",
			"location": "Maadi, Cairo, Egypt",
			"dates": "In progress",
			"description": "Software Development Training"
		},
		{
			"employer": "Microsoft",
			"title": "Software Engineer Intern",
			"location": "New Cairo, Cairo, Egypt",
			"dates": "August 2017",
			"description": "Software Development Training"
		}
	],
	display: function () {

		if (work.jobs.length > 0) {

			for (var i = 0; i < work.jobs.length; i++) {

				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;

				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
				var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

				$("#workExperience").append(HTMLworkStart);
				$('.work-entry:last').append(formattedEmployerTitle);

				$('.work-entry:last').append(formattedLocation);
				$('.work-entry:last').append(formattedDates);
				$('.work-entry:last').append(formattedDescription);
			}
		}
	}
};



var projects = {
	projects: [
		{
			'title': 'GUC Project',
			'dates': '2017',
			'description': 'GUC Bachelor Project',
			'images': ['images/project1.png']
		},
		{
			'title': 'RUB Univeristy Project',
			'dates': '2016',
			'description': 'RUB Univeristy Java Project',
			'images': ['images/project2.jpg']
		}
	],
	display: function () {

		if (projects.projects.length > 0) {

			for (var i = 0; i < projects.projects.length; i++) {

				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

				$('#projects').append(HTMLprojectStart);
				$('.project-entry:last').append(formattedTitle);
				$('.project-entry:last').append(formattedDates);
				$('.project-entry:last').append(formattedDescription);

				if (projects.projects[i].images.length > 0) {

					for (var j = 0; j < projects.projects[i].images.length; j++) {

						var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
						$('.project-entry:last').append(formattedImage);
					}
				}
			}
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);



