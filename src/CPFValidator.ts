export class CPFValidator {
    constructor(){}

    MIN_LEN_LIMIT = 11;
    MAX_LEN_LIMIT = 14;
    
    isInLimit(value: String): Boolean {
        if(value.length >= this.MIN_LEN_LIMIT || value.length <= this.MAX_LEN_LIMIT){
            return true;
        }
        return false;
    }

    removeMarks(value: String): String {
        return value.replace("[^\d]", "");
    }

    hasDuplicate(value: String): Boolean {
        return value.split("").every(c => c === value[0]);
    }

    isInVerifierDigitRules(value: String) :Boolean{
        try{  
            let     d1, d2;  
            let     dg1, dg2, rest;  
            let     digito;  
            let     nDigResult;  
            d1 = d2 = 0;  
            dg1 = dg2 = rest = 0;  
                
            for (let nCount = 1; nCount < value.length -1; nCount++) {  
                    digito = parseInt(value.substring(nCount -1, nCount));  							
                    d1 = d1 + ( 11 - nCount ) * digito;  
    
                    d2 = d2 + ( 12 - nCount ) * digito;  
            };  
                
            rest = (d1 % 11);  
    
            dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;  
            d2 += 2 * dg1;  
            rest = (d2 % 11);  
            if (rest < 2)  
                dg2 = 0;  
            else  
                dg2 = 11 - rest;  
    
            let nDigVerific = value.substring(value.length-2, value.length);  
            nDigResult = "" + dg1 + "" + dg2;  
            return nDigVerific == nDigResult;
        }catch (e){  
            console.error("Erro !"+e);  

            return false;  
        }  
    }

    isValidCPF(value: String): Boolean {
        if(!value) return false;
        if(!this.isInLimit(value)) return false;
        value = this.removeMarks(value)
        if (this.hasDuplicate(value)) return false;
        return this.isInVerifierDigitRules(value);
    }
    
}