const employee = {
  name: 'Siri',
  streetAddress: '1707/850 Whitehorse Road'
}


function updateEmployeeWithKeyAndValue(employee,key,value) {
  const newEmployee = {...employee};
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee,key) {
  const newDeleteEmployee = {...employee};
  delete newDeleteEmployee[key];
  return newDeleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
  delete employee[key];
  return employee;
}