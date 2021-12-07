using System;
using System.Collections.Generic;

#nullable disable

namespace TestApp2.Models
{
    public partial class CurrencyType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double AbsoluteValue { get; set; }
        public string CurrencyAbv { get; set; }
        public int Order { get; set; }
    }
}
