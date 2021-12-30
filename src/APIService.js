const BASE_URL = process.env.REACT_APP_SERVER === 'local'
  ? 'http://localhost:3001'
  : process.env.REACT_APP_SERVER_URL;

export async function createLoan(loan) {
  const res = await fetch(`${BASE_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loan)
  })
  return res.json();
}

export async function findLoan(id) {
  const res = await fetch(`${BASE_URL}/details/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json();
}

export async function updateLoan(id, loan) {
  const res = await fetch(`${BASE_URL}/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loan)
  })
  return res.json();
}