using System;
using System.Collections.Generic;

namespace TestApp2.Models
{
    public class ConverterModel
    {
        public string information { get; set; }
        public List<CurrencyType> Currencylist { get; set; }
    }
    //Outdated Currency Data list for non-Database currency listings for converter.
    //public class CurrencyData
    //{
    //    public string Name { get; set; }
    //    public decimal absoluteValue { get; set; }
    //    public string currencyABV { get; set; }
    //}

    public class DiceModel 
    {}

    public class Pf2ehpModel
    {}
}

