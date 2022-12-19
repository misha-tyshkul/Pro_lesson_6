function showArray(arr1, arr2) {
  const arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (!arr2.includes(element)) {
      arr3.push(element);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (!arr1.includes(element)) {
      arr3.push(element);
    }
  }

  if (!Array.isArray(arr1)) {
    console.log("Error");
    return [];
  }

  if (!Array.isArray(arr2)) {
    console.log("Error");
    return [];
  }

  return arr3;
}

console.log(showArray(["Lviv", "Dnipro", "Ternopil", "London"], ["Dnipro", "Paris", "York", "Ternopil"]));
