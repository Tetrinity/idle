/* 
 * The MIT License
 *
 * Copyright 2015 Tetrinity.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

angular.module('idle.service')
.factory('NumberService', [
    function(){
        var service = {}
        
        var ONE_BILLION = bigInt("1e9")
        var DECIMAL_PLACES = 3
        
        // source: http://bmanolov.free.fr/numbers_names.php
        var englishNames = [
            'one',
            'thousand',
            'million',
            'billion',
            'trillion',
            'quadrillion',
            'quintillion',
            'sextillion',
            'septillion',
            'octillion',
            'nonillion',
            'decillion',
            'undecillion',
            'duodecillion',
            'tredecillion',
            'quattuordecillion'
        ]
        
        service.getDisplayName = function(num){
            // TODO: implement setting for choosing between English and scientific notation
            return service.getEnglishName(num)
        }
        
        
        service.getEnglishName = function(num){
            if (num < ONE_BILLION){ return service.formatNumber(num.value) }
            
            // suffix algorithm:
            // calculate radix (10^n) and use as index into name table
            
            var radix = service.bigIntFloorLog(num)
            var suffix = englishNames[Math.floor(radix/3)]
            
            // prefix algorithm:
            // calculate number of digits before the decimal point (using the radix)
            // pull out all digits needed for the full prefix
            // round off to desired number of decimal places
            // slice off non-significant zeroes
            // insert decimal point at correct location
            
            var digitsBeforePoint = 1 + radix%3
            
            var basePrefix = num.toString().substring(0, digitsBeforePoint + DECIMAL_PLACES + 1)
            var prefix = Math.round(parseInt(basePrefix) / 10).toString()
            
            while (prefix.slice(-1) === "0" && prefix.length > digitsBeforePoint){
                prefix = prefix.substring(0, prefix.length-1)
            }
            
            // TODO: user setting for decimal separator
            if (prefix.length > digitsBeforePoint){
                prefix = prefix.substring(0, digitsBeforePoint) + "." + prefix.substring(digitsBeforePoint)
            }
            
            return prefix + " " + suffix
        }
        
        service.bigIntFloorLog = function(num){
            var numLength = num.toString().length
            return numLength-1
        }
        
        service.formatNumber = function(num){
            // lovingly stolen from http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
            var parts = num.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }
        
        
        return service
    }
])
