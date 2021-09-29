function log(date, importance, message) {
  alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log = _.curry(log);

// logNow will be the partial of log with fixed first argument
let logNow = log(new Date());


// use it
logNow("INFO", "message 1"); // [HH:mm] INFO message
logNow("INFO", "message 2"); // [HH:mm] INFO message


let debugNow = logNow("DEBUG");

debugNow("message 3"); // [HH:mm] DEBUG message