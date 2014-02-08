//Created By: Brij
//Website: http://techbrij.com

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["BrowserWidth"] != null)
        {
            // Do all code here to avoid double execution first time
            // ....
            lblDim.Text = "Width: " + Session["BrowserWidth"] + " Height: " + Session["BrowserHeight"];
        }
    }
}