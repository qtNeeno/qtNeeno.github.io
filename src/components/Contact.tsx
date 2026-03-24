import { Box, Button, Grid, Typography } from "@mui/material";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andrea-lentini-/",
  },
  {
    label: "GitHub",
    href: "https://github.com/qtNeeno",
  },
  {
    label: "Email",
    href: "mailto:andrea.lentini.dev@gmail.com",
  },
  /* {
    label: "CV",
    href: "#",
  }, */
];

const Contact = () => {
  return (
    <Box
      id="contact"
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
          Contact.
        </Typography>
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
          Qui trovi i miei contatti principali per collaborazioni, progetti o
          semplicemente per fare networking
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            mt: 4,
            justifyContent: "center",
          }}
        >
          {contactLinks.map((item) => {
            const isExternalLink =
              item.href.startsWith("http") || item.href.startsWith("mailto:");

            return (
              <Grid key={item.label} size={{ xs: 12, sm: 6 }}>
                <Button
                  component="a"
                  href={item.href}
                  fullWidth
                  size="large"
                  target={isExternalLink ? "_blank" : undefined}
                  rel={isExternalLink ? "noopener noreferrer" : undefined}
                  sx={{
                    minHeight: 56,
                    border: "1px solid rgba(245, 196, 0, 0.28)",
                    borderRadius: 3,
                    color: "#fff3bf",
                    backgroundColor: "rgba(245, 196, 0, 0.04)",
                    fontFamily: '"SN Pro", sans-serif',
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    letterSpacing: ".04rem",
                    textTransform: "none",
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    transition:
                      "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(245, 196, 0, 0.09)",
                      borderColor: "rgba(245, 196, 0, 0.48)",
                      boxShadow: "0 8px 24px rgba(245, 196, 0, 0.08)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
