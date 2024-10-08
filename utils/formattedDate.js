module.exports = {
  formattedDate: (timestamp) => {
    let date = new Date(timestamp);
    let options = { day: "numeric", month: "long", year: "numeric" };
    let formattedDate = date.toISOString("id-ID", options);
    return formattedDate;
  },
};
