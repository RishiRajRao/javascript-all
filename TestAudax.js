const datas = [
  { id: 1, name: "Test", email: "test@abc.com", tax: "Custom Tax_12%" },
  { id: 2, name: "Test2", email: "test2@abc.com", tax: "Income Tax_20%" },
  { id: 3, name: "Test3", email: "test3@abc.com", tax: "Sales Tax_10%" },
  { id: 4, name: "Test4", email: "test4@abc.com", tax: "VAT and GST_5%" },
  { id: 5, name: "Test5", email: "test5@abc.com", tax: "Property Tax_12%" },
  { id: 6, name: "Test6", email: "test6@abc.com", tax: "Property Tax_12%" },
];
const tempSet = new Set();
const filterData = datas.filter((val,idx,datas)=>{
  let check = !tempSet.has(val.tax)
  check ?tempSet.add(val.tax):'';
  return check;
})


filterData.map(val=>console.log(val.id));