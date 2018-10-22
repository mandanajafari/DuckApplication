using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(duck_fed.Startup))]
namespace duck_fed
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
