/*
1.Buatlah contoh query untuk menampilkan data semua buku berdasarkan nama penulis

SELECT Book.title, Book.publicationYear, Book.genre, Book.countPage, Book.rating, Book.image, Author.displayName as authorName
FROM Book
JOIN Author ON Book.AuthorId = AuthorId;

==========================================================================================================================================================================

2. Buatlah contoh query untuk menampilkan data buku dan nama penulis berdasarkan kategori

SELECT Book.title, Book.publicationYear, Book.genre, Book.countPage, Book.rating, Book.image, Auhtor.displayName as authorName, category.name as categoryName
FROM Book
JOIN Auhtor ON Book.AuthorId = AuhtorId
JOIN Category ON Book.CategoryId = CategoryId;
*/
