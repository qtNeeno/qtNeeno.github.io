import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { projectsData } from "../projectsData";

const Projects = () => {
  return (
    <Box
      id="projects"
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
        {/* Titolo sezione */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: '"Archivo Black", sans-serif',
            fontSize: { xs: "2.2rem", md: "3rem" },
            background:
              "linear-gradient(90deg, #fff0a6 0%, #f5c400 48%, #8a6a00 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Projects.
        </Typography>

        {/* Sottotitolo breve */}
        <Typography
          sx={{
            mt: 1,
            textAlign: "center",
            color: "rgba(255, 246, 204, 0.86)",
            fontSize: { xs: "0.98rem", md: "1.05rem" },
            maxWidth: 620,
            mx: "auto",
          }}
        >
          Qui ci sono progetti personali a cui ho lavorato in questi anni per
          formarmi come sviluppatore
        </Typography>

        {/* Griglia Progetti */}
        <Grid
          container
          spacing={2}
          sx={{
            mt: 4,
            alignItems: "stretch",
          }}
        >
          {/* Card progetti: tutte a pari altezza grazie a Grid + Card flex column */}
          {projectsData.map((item) => {
            return (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 4,
                    border: "1px solid rgba(245, 196, 0, 0.16)",
                    background:
                      "linear-gradient(180deg, rgba(26, 26, 26, 0.96) 0%, rgba(15, 15, 15, 0.98) 100%)",
                    boxShadow: "0 10px 28px rgba(0, 0, 0, 0.24)",
                    transition:
                      "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "rgba(245, 196, 0, 0.30)",
                      boxShadow: "0 14px 34px rgba(245, 196, 0, 0.08)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, pb: 2 }}>
                    <Stack spacing={1.5}>
                      <Typography
                        sx={{
                          color: "#fff6cc",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          lineHeight: 1.2,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "rgba(255, 246, 204, 0.74)",
                          fontSize: "0.96rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Button
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        minHeight: 40,
                        px: 2,
                        borderRadius: 999,
                        border: "1px solid rgba(245, 196, 0, 0.34)",
                        color: "#1a1405",
                        background:
                          "linear-gradient(90deg, #fff0a6 0%, #f5c400 48%, #d49b00 100%)",
                        textTransform: "none",
                        fontWeight: 700,
                        letterSpacing: ".02rem",
                        transition:
                          "transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease",
                        "&:hover": {
                          transform: "translateY(-1px)",
                          boxShadow: "0 10px 24px rgba(245, 196, 0, 0.18)",
                          filter: "brightness(1.03)",
                        },
                      }}
                    >
                      View project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
