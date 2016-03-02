var bio = {
	"name" : "Michael Dotson",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "601-985-8777",
		"email" : "md1849@att.com",
		"github" : "md1849",
		"location" : "Madison, MS"
	},
	"welcomeMessage" : "During my 16+ years at AT&T I have held many positions including: Service Tech, TSM, Network Quality and Process Manager, UFO Network Manager, and ATO Development Coach",
	"skills" : [
		"Excel", "Word", "Adobe Acrobat", "Business Objects", "Power Point"
	],
	"biopic" : "images/profilepic.jpg"
};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
	$("#topContacts").append(formattedGithub);
	var formattedWelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#topContacts").append(formattedWelcomemsg);
	$("#topContacts").append(HTMLskillsStart);
	for(skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#topContacts").append(formattedSkill);
	}
	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#topContacts").prepend(formattedBiopic);
	$("#lets-connect").append(formattedMobile);
	$("#lets-connect").append(formattedEmail);
	$("#lets-connect").append(formattedGithub);
};
bio.display();
var education = {
	"schools" : [ {
	  	"name" : "Warren Central",
	  	"location" : "Vicksburg, MS",
	  	"degree" : "Diploma",
	  	"majors" : ["High School"],
	  	"dates" : "1980 - 1984",
	  	"url" : "http://www.vwsd.k12.ms.us/schools/wc/wc.htm/"
	  },
	  {
	  	"name" : "Western International",
	  	"location" : "Pheonix, AZ",
	  	"degree" : "Associate Degree",
	  	"majors" : ["Information Technology"],
	  	"dates" : "2005 - 2006",
	  	"url" : "http://west.edu/"
	  }
	 ],
	 "onlineCourses" : [
	   {
	   	"title" : "Intro to Computer Science",
	   	"school" : "Udacity",
	   	"date" : "2015 - 2016",
	   	"url" : "https://www.udacity.com/courses/cs101"
	   },
	   {
	   	"title" : "Programming Foundations with Python",
	   	"school" : "Udacity",
	   	"date" : "2015 - 2016",
	   	"url" : "https://www.udacity.com/courses/ud036"
	   }
	 ]
};
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for(course in education.onlineCourses) {				
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
	
}
education.display();
var work = {
	"jobs" : [ {
	  	"employer" : "AT&T",
	  	"title" : "ATO Development Coach",
	  	"location" : "Ridgeland, MS",
	  	"dates" : "6/2012 - Current",
	  	"description" : "Develop Network Managers to improve and sustain corporate metrics"
	  },
	  {
	  	"employer" : "AT&T",
	  	"title" : "Network Manager",
	  	"location" : "Madison, MS",
	  	"dates" : "10/2011 - 6/2012",
	  	"description" : "Manage a group of technicians who install and repair Uverse services, including TV, HSIA, and VoIP"
	  },
	  {
	  	"employer" : "AT&T",
	  	"title" : "Network Process and Quality Manager",
	  	"location" : "Gulfport, MS",
	  	"dates" : "7/2007 - 10/2011",
	  	"description" : "Support Area Managers in District, Track budget, LRC Coorodinator, and Contingency planning"
	  },
	  {
	  	"employer" : "Bell South",
	  	"title" : "Technical Service Manager",
	  	"location" : "Jackson, MS",
	  	"dates" : "10/2006 - 7/2007",
	  	"description" : "Support Network Managers in Turf, SPOC for projects in Area Manager Turf, and Data Analysis for Area Manager group"
	  },
	  {
	  	"employer" : "Bell South",
	  	"title" : "Service Technician",
	  	"location" : "Vicksburg, MS",
	  	"dates" : "10/1998 - 10/2006",
	  	"description" : "Install and repair POTS and ADSL services"
	  }
	]
};
work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();
var projects = {
	"projects" : [ {
	  	"title" : "Porfolio",
	  	"dates" : "12/2015 - 1/2016",
	  	"description" : "My Portfolio",
	  	"images" : []
	  }
	]
};
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
projects.display();
//$("#main").append(internationalButton);
$("#mapDiv").append(googleMap);
