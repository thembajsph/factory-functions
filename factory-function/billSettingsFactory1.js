// write the function that you would like to test here

function billWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;
    };

    function getCallCost() {
        return theCallCost;
    };

    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    };

    function getSmsCost() {
        return theSmsCost;

    };

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;

    };

    function getWarningLevel() {
        return theWarningLevel;
    };

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;

    };

    function getCriticalLevel() {
        return theCriticalLevel;
    };

    function makeCall() {
        //havent reached the critical level

      if (hasReachedCriticalLevel()) {
            callCostTotal += theCallCost;
        }

    };

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    };

    function getTotalCallCost() {
        return callCostTotal;
    };

    function getTotalSmsCost() {
        return smsCostTotal;
    };

    function sendSms() {
        if (hasReachedCriticalLevel()) {
            smsCostTotal += theSmsCost;
        }


   };
    //instead of doing this over and over create a reach critical function
   function hasReachedCriticalLevel() {
        return getTotalCost() <= getCriticalLevel();
    };
    
    function totalClassName() {
        if (getTotalCost() >= getCriticalLevel()) {
            return "critical"
        }

        if (getTotalCost() >= getWarningLevel()) {
            return "warning"

        }
    };
   



    return {

        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        hasReachedCriticalLevel,
        totalClassName
    };
};