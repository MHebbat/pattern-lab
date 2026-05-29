import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PatternDetail from "@/pages/PatternDetail";
import CheatSheet from "@/pages/CheatSheet";
import ChopLab from "@/pages/ChopLab";
import SongLab from "@/pages/SongLab";
import PackLab from "@/pages/PackLab";
import MasterClass from "@/pages/MasterClass";
import MasterClassDetail from "@/pages/MasterClassDetail";
import HardwareGuide from "@/pages/HardwareGuide";
import { GeneratedPatternsProvider } from "@/lib/generatedPatternsStore";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pattern/:id" component={PatternDetail} />
      <Route path="/cheatsheet" component={CheatSheet} />
      <Route path="/choplab" component={ChopLab} />
      <Route path="/songlab" component={SongLab} />
      <Route path="/packlab" component={PackLab} />
      <Route path="/masterclass" component={MasterClass} />
      <Route path="/masterclass/:id" component={MasterClassDetail} />
      <Route path="/hardware" component={HardwareGuide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GeneratedPatternsProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </GeneratedPatternsProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
