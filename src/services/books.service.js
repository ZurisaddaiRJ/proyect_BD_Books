import firebase from "../firebase";

const db = firebase.collection("/books");

class BooksDataService {
  getAll() {
    return db;
  }

  create(books) {
    return db.add(books);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }

}
const BooksDataServiceInstance= new BooksDataService();
export default BooksDataServiceInstance