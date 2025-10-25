
const fullName = document.getElementById("fullName");
const department = document.getElementById("department");
const course = document.getElementById("course");
const duration = document.getElementById("duration");
const isStudent = document.getElementById("isStudent");

//create a function that will make a request to the backend profile endpoint and retrieve the user details

async function getProfile() {
  try {
    const fetchProfile = await fetch('https://fullstack-nkgi.onrender.com/api/profile');
    const profile = await fetchProfile.json();
    console.log("profile is: ", profile);

    if (profile.fullName) {
      fullName.textContent = profile.fullName;
      department.textContent = profile.department;
      course.textContent = profile.course;
      duration.textContent = profile.duration;
      isStudent.textContent = profile.isStudent;
    }

  } catch (error) {
    console.log("fetch profile failed with error: ", error);
  }
}
getProfile();

async function registerUser() {
  const reg = await fetch("https://fullstack-nkgi.onrender.com/api/profile", {
    method: "post",
    body: JSON.stringify({ code: "123" }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const res = await reg.json();
  console.log("res is: ", res);
}

registerUser();