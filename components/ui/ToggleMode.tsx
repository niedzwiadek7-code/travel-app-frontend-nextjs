'use client'

import {useColorScheme} from "@mui/joy/styles";
import * as React from "react";
import Button from "@mui/joy/Button";
import {DarkMode, LightMode} from "@mui/icons-material";

const ModeToggle: React.FC = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === 'dark' ? 'light' : 'dark');
      }}
      startDecorator={mode === 'dark' ? <DarkMode /> : <LightMode />}
    >
      {mode === 'dark' ? 'Dark' : 'Light'}
    </Button>
  );
}

export default ModeToggle
