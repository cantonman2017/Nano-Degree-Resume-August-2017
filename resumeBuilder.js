var work = {
	"jobs": [
		{
			"employer":  "AT&T Mobility",
			"title":  "Principal - Technology Security",
			"location":  "Atlanta, GA",
			"dates":  "Sept 2011 to current",
			"description": "Responsible for reviewing of project for compliance to AT&T security mandates during design.  Responsible for software security scans via McAfee EVM scan engine for new and upgraded software and hardware projects and authoring of suggested security remediation for discovered security vulnerabilities. Responsible for reviews and authoring of Security Consultation reports for NTD (Network Technology Development), Project Security Checklists as required by AT&T Mobility, Cloud, and Enterprise project teams to include authoring of suggested security remediations for vendors’ non-compliance to ASPR."
		},
		{
			"employer":  "AT&T Mobility",
			"title":  "NP&E Core Equipment and Implementation Engineer ",
			"location":  "Atlanta, GA",
			"dates":  "Sept 2006 to Sept 2010",
			"description": "Responsible for Equipment Engineering and Implementation Engineering duties for core switchs. Responsible to work in a hands-on relationship with key infrastructure vendors to ensure compliance with AT&T’s equipment installation and cabling standards for Data Center and MTSO (Mobile Telephone Switch Office) projects. Responsible for the development of ancillary capital budget to support MSC, MSN, DCS, Voicemail, SGSNs and USGSNs growth and new network deployments in the GA markets and other dependent Southeast markets."
 		}
	]
};

var project = {
	"projects": [
		{
			"title": "Project Iron Horse",
			"dates":  "May 2008 - August 2008",
			"description": "Standarized Data Center Plan",
			"projPic": "images/DataCenter.jpg"
		},
		{	"title": "Project Tron",
			"dates":  "May 2009 - Sept 2009",
			"description":  "Standardized MSC/MTSO Floor Plan",
			"projPic": "images/DataCenter2.jpg"
		}
	]
};

var bio = {
	"name" : "Evans V Roberts Jr",
	"role" : "Manager - CyberSecurity",
	"contacts": {
	"email" : "evansvr59@gmail.com",
	"mobile" : "770-633-1489",
	"github" : "cantonman2017",
	"location": "Canton, GA",
	},
	"welcomeMessage": "Thank You for reading my resume.  I hope my skills and experience meet your needs and expectations.",
	"skills" : [
	"Methodical", "Dedicated", "Quick Study", "Conscientious"
	],
	"bioPic": "images/vincebytree2017.jpg"
};

var education = {
	"schools": [
 		{
 			"name": "Champlain College",
			"degree": "Computer Science",
 			"dates": "May 2015 - August 2016",
			"location": "Burlington, VT",
			"major": "CyberSecurity"
 		},
 		],
	"onlineCourses": [	
		{
			"school": "Udacity",
			"title": "Intro to Programming",
     		"dates": "March 2017 - August 2017",
     		"url": "http://www.udacity.com"		
	 	}
	],
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	// var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	// $("#skills").append(formattedSkill);
	// 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	// $("#skills").append(formattedSkill);
	// 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	// $("#skills").append(formattedSkill);
	// 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	// $("#skills").append(formattedSkill);
};

//var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
//$("#skills").append(formattedbioPic);

work.display = function() {
	work.jobs.forEach(function(work){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
		$(".work-entry:last").append(formattedEmployer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
		$(".work-entry:last").append(formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.description);
		$(".work-entry:last").append(formattedDescription);
    });
};
work.display();

projects.display = function() {
	project.projects.forEach(function(project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedDescription);
		var formattedprojPic = HTMLprojectImage.replace("%data%", project.projPic);
		$(".project-entry:last").append(formattedprojPic);
    });
};
projects.display();

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);
 
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
 
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
 
    if(education.onlineCourses.length > 0) {
    	for(i in education.onlineCourses) {
           	$("#education").append(HTMLonlineClasses);
             
            $("#education").append(HTMLschoolStart);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            
 
	        $(".education-entry:last").append(formattedOnlineSchool);
	        $(".education-entry:last").append(formattedOnlineDates);
	        $(".education-entry:last").append(formattedOnlineTitle);
	        $(".education-entry:last").append(formattedOnlineURL);
        }
    }
 }
};
education.display();

 bio.display = function() {
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#topContacts, #footerContacts").prepend(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#topContacts, #footerContacts").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").prepend(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#skills").append(formattedbioPic);
    //Appends the array of bio.skills to the #skills section.
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[indexCount]);
        $("#skills").append(formattedSkill);

    }
};
bio.display();

$("#mapDiv").append(googleMap);





