var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Error"] = "ERROR";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
var currentStatus = Status.Success;
console.log(currentStatus); // Output: "SUCCESS"
