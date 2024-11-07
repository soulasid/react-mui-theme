import { FC, useState, useRef } from "react";
import { Box, MenuItem, Stack, IconButton, Popover } from "@mui/material";
// import { LanguageOption } from '../types';

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: "/icons/ic_flag_en.svg",
  },
  {
    value: "de",
    label: "German",
    icon: "/icons/ic_flag_de.svg",
  },
  {
    value: "fr",
    label: "French",
    icon: "/icons/ic_flag_fr.svg",
  },
];

const LanguagePopover: FC = () => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>("en");

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleChangeLang = (newLang: string): void => {
    setSelectedLang(newLang);
    handleClose();
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
        }}
      >
        <img
          src={LANGS.find((lang) => lang.value === selectedLang)?.icon}
          alt={selectedLang}
        />
      </IconButton>

      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            px: 2.5,
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === selectedLang}
              onClick={() => handleChangeLang(option.value)}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />
              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
};

export default LanguagePopover;
