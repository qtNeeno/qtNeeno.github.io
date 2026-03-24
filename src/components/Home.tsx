import { Box, Grid, Stack, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import About from "./About";

const techIcons = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "MUI",
    src: "https://cdn.simpleicons.org/mui/007FFF",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        id="home"
        sx={{
          minHeight: "calc(100vh - 80px)",
          mt: 2,
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 0 },
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0f0f0f 0%, #161616 52%, #1f1a06 100%)",
        }}
      >
        <Grid
          container
          spacing={{ xs: 6, md: 4, lg: 6 }}
          alignItems="center"
          sx={{
            width: "100%",
            maxWidth: "1320px",
            mx: "auto",
          }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 230, sm: 300, md: 360 },
                  height: { xs: 230, sm: 300, md: 360 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "18%",
                    left: "18%",
                    width: "64%",
                    height: "64%",
                    borderRadius: "50%",
                    background: "rgba(245, 196, 0, 0.09)",
                    filter: "blur(48px)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    border: "4px solid #d9aa1f",
                    borderRadius: 3,
                    boxShadow: "0 0 18px rgba(245, 196, 0, 0.10)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: -8, md: -16 },
                    bottom: { xs: -20, md: -28 },
                    px: 1,
                    py: 0.35,
                    lineHeight: 1,
                    fontSize: { xs: "4.4rem", sm: "5.4rem", md: "6.5rem" },
                    fontWeight: 900,
                    color: "#e0b100",
                    textShadow: "0 0 10px rgba(245, 196, 0, 0.16)",
                    background:
                      "radial-gradient(circle at center, rgba(245, 196, 0, 0.08) 0%, rgba(245, 196, 0, 0.05) 34%, rgba(20, 20, 20, 0.9) 76%, #141414 100%)",
                    borderRadius: 2,
                    boxShadow: "0 0 16px rgba(245, 196, 0, 0.08)",
                  }}
                >
                  {"</>"}
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Stack
              spacing={3}
              sx={{
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                maxWidth: { xs: "100%", md: 720 },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"Archivo Black", sans-serif',
                    fontSize: { xs: "2.6rem", sm: "3.4rem", md: "4.4rem" },
                    lineHeight: 1.05,
                    color: "#fff6cc",
                  }}
                >
                  Ciao, sono Andrea!
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontFamily: '"Archivo Black", sans-serif',
                    fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
                    lineHeight: 1.05,
                    background:
                      "linear-gradient(90deg, #fff0a6 0%, #f5c400 48%, #8a6a00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Frontend Developer
                </Typography>
              </Box>
              <Stack
                direction="row"
                spacing={2}
                useFlexGap
                flexWrap="wrap"
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                {techIcons.map((tech) => (
                  <Box
                    key={tech.name}
                    sx={{
                      width: 52,
                      height: 52,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(245, 196, 0, 0.28)",
                      borderRadius: 999,
                      backgroundColor: "rgba(245, 196, 0, 0.06)",
                      boxShadow: "0 0 12px rgba(245, 196, 0, 0.04)",
                      transition:
                        "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        backgroundColor: "rgba(245, 196, 0, 0.10)",
                        borderColor: "rgba(245, 196, 0, 0.40)",
                      },
                    }}
                    title={tech.name}
                  >
                    <Box
                      component="img"
                      src={tech.src}
                      alt={tech.name}
                      sx={{
                        width: 26,
                        height: 26,
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <About />
            <Experience />
            <Projects />
            <Contact />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
