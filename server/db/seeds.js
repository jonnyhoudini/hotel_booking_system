use hotel;

db.dropDatabase();

db.bookings.insertMany([
    { guestName: "Jonny Houdin", email: "jonny@houd.in", isCheckedIn: true },
    { guestName: "Cycy Dat Wok", email: "cycy@gmail.fr", isCheckedIn: false },
    { guestName: "Queen Elizabeth II", email: "queeny@palace.gov.uk", isCheckedIn: true }
]);