using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using TestApp2.Models;

namespace TestApp2.Controllers
{
    /*
     * Todo:
     * make a new folder with a controller for all of the content separate from the HomeController & home folder
     * do everything I did with the coin converter to pf2ehomepage STYLE MORE OH GWWWWAWWWWFFDFFDDD
     * dice roller. random generation lists.
     * Trade Goods Database & Dropdown comparing to currencies for values? needs names at top of tables as the column titles. export the html tables to js and then in to database?
     * Add ability to add/remove from CurrencyType Database Table visually
     */
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private List<CurrencyType> CurrencyTypes = new List<CurrencyType>();

        //package manager console info to copy-paste; press enter afterwards. This UPDATES THE DATABASE, DO NOT LOSE!! "DataSource= SQL Server name hosted locally?, Catalog= Name of the custom database for my shit.
        // Scaffold-DbContext -Connection "Data Source=(localdb)\ProjectsV13;Initial Catalog=PF2Database;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"  -Provider "Microsoft.EntityFrameworkCore.SqlServer" -o Models -Context "TestDbContext" -Force
        //!!IMPORTANT!!
        public HomeController(ILogger<HomeController> logger)
        {
            //CurrencyTypes.Add(new CurrencyData { Name = "Gold Standard", absoluteValue = 1, currencyABV = "(GS)" });
            //CurrencyTypes.Add(new CurrencyData { Name = "Old-Barlan Gilder", absoluteValue = 10, currencyABV = "(OBG)"});
            //CurrencyTypes.Add(new CurrencyData { Name = "Old-Barlan Half-Gilder", absoluteValue = 5, currencyABV = "(OBH)"});
            //CurrencyTypes.Add(new CurrencyData { Name = "Old-Barlan Shill", absoluteValue = 0.02m, currencyABV = "(OBS)" });
            //CurrencyTypes.Add(new CurrencyData { Name = "Bone Token", absoluteValue = 0.05m, currencyABV = "(Bo)" });

            using(var context = new TestDbContext())
            {
                //Displays the ENTIRE CurrencyType database. Don't worry, it's supposed to be pluralized here even though it's not on the other thing eeeeeeeeeee
                CurrencyTypes = context.CurrencyTypes.OrderBy(x => x.Order).ToList();
                //.OrderBy(x => x.AbsoluteValue) orders the list by worth
                //.Orderby, .Tolist are Linq. A way of programming in most languages. A way to filter lists/select specific things in a list in to another list
            }



            _logger = logger;
        }

        public IActionResult PF2ehomepage()
        {
            return View();
        }
        public IActionResult Converter()
        {
            return View(new ConverterModel {information = "Test",Currencylist = CurrencyTypes });
        }

        public IActionResult Diceroller()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
