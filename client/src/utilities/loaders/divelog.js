
export async function getAllDivelog() {
  const res = await fetch('http://localhost:8000/api/divelog/');
  const data = await res.json(); 
  console.log(data); 
  return data;
}

export async function getSingleDivelog(_id){
  const res = await fetch(`http://localhost:8000/api/divelog/${_id}`)
  const data = await res.json(); 
  console.log(data); 
  return data;
}
