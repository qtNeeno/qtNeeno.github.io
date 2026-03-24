import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

const Footer = () => {
  const currentYear = dayjs().year();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(245, 196, 0, 0.12)",
        background: "linear-gradient(180deg, #111111 0%, #0b0b0b 100%)",
        px: { xs: 3, md: 8 },
        py: { xs: 4, md: 5 },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <Stack spacing={2.5}>
          {/* Riga principale footer */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={2}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Archivo Black", sans-serif',
                  fontSize: { xs: "1.15rem", md: "1.25rem" },
                  color: "#fff6cc",
                }}
              >
                Neeno
              </Typography>

              <Typography
                sx={{
                  mt: 0.6,
                  color: "rgba(255, 246, 204, 0.72)",
                  fontSize: "0.95rem",
                  maxWidth: 420,
                }}
              >
                Frontend Developer
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2.5 }}
              sx={{
                color: "rgba(255, 246, 204, 0.78)",
                fontFamily: '"SN Pro", sans-serif'
              }}
            >
              <Link
                href="mailto:andrea.lentini.dev@gmail.com"
                underline="hover"
                sx={{ color: "inherit", }}
              >
                Email
              </Link>
              <Link
                href="https://github.com/qtNeeno"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ color: "inherit" }}
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/andrea-lentini-/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ color: "inherit" }}
              >
                LinkedIn
              </Link>
            </Stack>
          </Stack>

          {/* Riga secondaria: copyright + credit designer */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={1.5}
            sx={{
              pt: 2,
              borderTop: "1px solid rgba(245, 196, 0, 0.08)",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255, 246, 204, 0.58)",
                fontSize: "0.88rem",
              }}
            >
              © {currentYear} Neeno. All rights reserved.
            </Typography>

            <Typography
              sx={{
                color: "rgba(255, 246, 204, 0.62)",
                fontSize: "0.88rem",
              }}
            >
              Icon illustrations by{" "}
              <Link
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{
                  color: "#f1c644",
                  fontWeight: 600,
                }}
              >
                SarahLM
              </Link>
              .
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
