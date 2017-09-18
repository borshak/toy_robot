const Robot = function(name, serial) {
    this.name = name;
    this.serial = serial;
};

Robot.prototype.getName = function() {
    return this.name;
};

Robot.prototype.getSerial = function() {
    return this.serial;
};

module.exports = Robot;