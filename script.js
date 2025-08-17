// Sample job listings (can be expanded later)
const jobs = [
  { title: "Food Delivery Partner", company: "QuickEats", location: "Delhi", type: "delivery", contact: "+91 9876543210" },
  { title: "Home Tutor (Math & Science)", company: "LearnWell", location: "Mumbai", type: "tutor", contact: "+91 8765432109" },
  { title: "Bike Mechanic", company: "SpeedFix", location: "Bangalore", type: "mechanic", contact: "+91 7654321098" },
  { title: "Electrician for Home Repairs", company: "FixIt Fast", location: "Chennai", type: "electrician", contact: "+91 6543210987" },
  { title: "Office Cleaner", company: "CleanPro", location: "Hyderabad", type: "cleaner", contact: "+91 5432109876" },
  { title: "Cab Driver", company: "GoRide", location: "Pune", type: "driver", contact: "+91 4321098765" },
  { title: "Gardener for Apartments", company: "GreenSpace", location: "Ahmedabad", type: "gardener", contact: "+91 3210987654" },
  { title: "Part-Time Delivery", company: "LocalMart", location: "Kolkata", type: "delivery", contact: "+91 2109876543" }
];

// Function to display jobs
function showJobs(filteredJobs) {
  const results = document.getElementById("results");
  
  if (filteredJobs.length === 0) {
    results.innerHTML = "<p>No jobs found. Try another location or job type.</p>";
    return;
  }

  results.innerHTML = "";

  filteredJobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <div class="contact">
        <a href="tel:${job.contact}">📞 Call</a>
        <a href="https://wa.me/${job.contact}" target="_blank">💬 WhatsApp</a>
      </div>
    `;
    results.appendChild(div);
  });
}

// Search jobs on form submit
document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  
  const location = document.getElementById("location").value.toLowerCase();
  const jobType = document.getElementById("jobType").value;

  const filtered = jobs.filter(job => 
    job.location.toLowerCase().includes(location) &&
    (jobType === "" || job.type === jobType)
  );

  showJobs(filtered);
});

// Show all jobs on page load (optional)
// showJobs(jobs); // Uncomment if you want to show all jobs by default
