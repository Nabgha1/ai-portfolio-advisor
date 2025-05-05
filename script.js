function generateIdea() {
  const input = document.getElementById("skillsInput").value.toLowerCase();
  const result = document.getElementById("result");

  let idea = "";

  if (input.includes("html") && input.includes("css") && input.includes("javascript")) {
    idea = "ایک پورٹ فولیو ویب سائٹ بنائیں جس میں انٹرایکٹو UI سیکشنز ہوں جیسے ٹیبز، سلائیڈر، اور پروجیکٹ گیلری۔";
  } else if (input.includes("bootstrap")) {
    idea = "Bootstrap کے ذریعے ایک سادہ اور ریسپانسیو لینڈنگ پیج بنائیں۔";
  } else if (input.includes("ai")) {
    idea = "ایک سادہ AI ٹول UI بنائیں جہاں یوزر پرامپٹ دے اور آپ ڈمی ریسپانس شو کریں۔";
  } else {
    idea = "Bootstrap یا JavaScript DOM سیکھنے کی کوشش کریں اور ایک سادہ To-Do ایپ بنائیں۔";
  }

  result.innerText = idea;
}