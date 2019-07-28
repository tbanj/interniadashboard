class Storage {
  storeItem(item) {

    let movieListA;
    // Check if any items in ls

    if (localStorage.getItem("employeeData") === null) {
      movieListA = [];
      // Push new item

      if (item.length >= 1) {
        movieListA = [...item];
      }

      if (item.length === 0) {
        movieListA.push(item);
      }

      // Set ls
      localStorage.setItem("employeeData", JSON.stringify(movieListA));
    } else {
      // Get what is already in ls
      movieListA = JSON.parse(localStorage.getItem("employeeData"));

      // Push new item
      if (item.length >= 1) {
        movieListA = [...item];
      }

      if (item.length === 0) {
        movieListA.push(item);
      }
      // Reset ls
      localStorage.setItem("employeeData", JSON.stringify(movieListA));
    }
  }

  getItemsFromStorage() {
    let movieListA;
    if (localStorage.getItem("employeeData") === null) {
      movieListA = [];
      return movieListA;
    } else {
      movieListA = JSON.parse(localStorage.getItem("employeeData"));
    }
    return movieListA;
  }

  updateItemStorage(updatedItem) {
    let movieListA = JSON.parse(localStorage.getItem("employeeData"));

    movieListA.forEach(function (item, index) {
      if (updatedItem._id === item._id) {
        movieListA.splice(index, 1, updatedItem);
      }
    });
    localStorage.setItem("employeeData", JSON.stringify(movieListA));
  }

  deleteItemFromStorage(id) {
    let movieListA = JSON.parse(localStorage.getItem("employeeData"));

    movieListA.forEach(function (item, index) {
      if (id === item._id) {
        movieListA.splice(index, 1);
      }
    });
    localStorage.setItem("employeeData", JSON.stringify(movieListA));
  }
  clearItemsFromStorage() {
    localStorage.removeItem("employeeData");
  }

  nameLast() {
    return "how are you";
  }
}
// module.exports = NoteStorage;
export default Storage;
