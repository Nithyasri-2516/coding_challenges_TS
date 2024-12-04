enum Status {
    Success = "SUCCESS",
    Error = "ERROR",
    Pending = "PENDING",
  }
  
  let currentStatus: Status = Status.Success;
  console.log(currentStatus); // Output: "SUCCESS"
  