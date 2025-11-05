function formatDate(dateStr, lang = "tr") {
  const enterDate = new Date(dateStr);

  const monthList = {
    tr: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
    eng: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  };

  const day = enterDate.getDate();
  const month = monthList[lang] || monthList["tr"];
  const newMonth = month[enterDate.getMonth()];
  const year = enterDate.getFullYear();

  return `${day} ${newMonth} ${year}`;
}

export default formatDate;
