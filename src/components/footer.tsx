import { FunctionComponent } from "react";
import { Card, CardContent } from "@app/components/ui/card";

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-indigo-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <Card className="bg-transparent shadow-none border-none">
          <CardContent className="p-0">
            <div className="text-center text-sm text-white/90">
              © 2025 The Rising Gurkhas FC. All rights reserved.
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
