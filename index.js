let catsList = [];

const addCat = (name, breed, age) => {
  let cat = {
    name: name,
    breed: breed,
    age: age,
  };
  catsList.push(cat);
};

const getCatsList = () => {
  return catsList;
};

const emptyClass = () => {
  catsList = [];
};

export { addCat, getCatsList, emptyClass };
