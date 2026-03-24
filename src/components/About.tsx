import { Box, Grid, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        px: { xs: 3, md: 8 },
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 180, sm: 220, md: 240 },
                  height: { xs: 180, sm: 220, md: 240 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: "12%",
                    borderRadius: 4,
                    background: "rgba(245, 196, 0, 0.08)",
                    filter: "blur(36px)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 3,
                    background:
                      "linear-gradient(135deg, rgba(255, 240, 166, 0.18) 0%, rgba(245, 196, 0, 0.14) 45%, rgba(217, 170, 31, 0.10) 100%)",
                    border: "1px solid rgba(245, 196, 0, 0.22)",
                    boxShadow:
                      "0 14px 30px rgba(0, 0, 0, 0.24), 0 0 24px rgba(245, 196, 0, 0.06)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: -20, md: -30 },
                    top: "8%",
                    width: { xs: 24, md: 30 },
                    height: "84%",
                    transform: "skew(-12deg)",
                    borderRadius: 2,
                    background:
                      "linear-gradient(180deg, rgba(245, 196, 0, 0.10) 0%, rgba(245, 196, 0, 0.02) 100%)",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={2.2}>
              <Typography
                variant="h4"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontFamily: '"Archivo Black", sans-serif',
                  fontSize: { xs: "2.2rem", md: "3rem" },
                  background:
                    "linear-gradient(90deg, #fff0a6 0%, #f5c400 48%, #8a6a00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About
                <Box
                  component="span"
                  sx={{
                    color: "#d9aa1f",
                  }}
                >
                  .
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255, 246, 204, 0.86)",
                  fontSize: { xs: "0.98rem", md: "1.03rem" },
                  lineHeight: 1.9,
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: 760,
                }}
              >
                Da sempre appassionato di tecnologia e informatica, ho iniziato
                a studiare da autodidatta nel 2021, seguendo corsi di HTML e CSS
                e costruendo le mie prime basi nel web development.
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255, 246, 204, 0.78)",
                  fontSize: { xs: "0.98rem", md: "1.03rem" },
                  lineHeight: 1.9,
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: 760,
                }}
              >
                Nel 2022 ho frequentato un bootcamp full stack presso Aulab,
                esperienza che mi ha permesso di consolidare il mio percorso e
                acquisire le competenze necessarie per entrare nel mondo del
                lavoro come sviluppatore.
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255, 246, 204, 0.78)",
                  fontSize: { xs: "0.98rem", md: "1.03rem" },
                  lineHeight: 1.9,
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: 760,
                }}
              >
                Oggi lavoro come Frontend Developer e mi occupo dello sviluppo
                di siti e applicazioni web con React, TypeScript e MUI, con una
                particolare attenzione a interfacce moderne e esperienza utente
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
