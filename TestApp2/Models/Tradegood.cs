using System;
using System.Collections.Generic;

#nullable disable

namespace TestApp2.Models
{
    public partial class Tradegood
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Name { get; set; }
        public double? CostBulk { get; set; }
        public double? StorageCount { get; set; }
        public string StorageType { get; set; }
        public double? WeightBulk { get; set; }
        public string CulturalValue { get; set; }
        public string Description { get; set; }
    }
}
