import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links= [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
  { name: "Experience", id: "experience" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navbarOffset = 88;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - navbarOffset,
      behavior: "smooth",
    });

    setActiveSection(sectionId);
    handleCloseDrawer();
  };

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(15, 15, 15, 0.92)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(245, 196, 0, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ minHeight: { xs: 72, md: 80 }, px: { xs: 1, sm: 2 } }}>
          {/* Logo: riporta sempre alla hero iniziale */}
          <Typography
            variant="h6"
            noWrap
            component="button"
            onClick={() => scrollToSection("home")}
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: { xs: ".2rem", md: ".3rem" },
              color: "#fff6cc",
              textDecoration: "none",
              fontSize: { xs: "1rem", md: "1.25rem" },
              background: "transparent",
              border: "none",
              p: 0,
              transition: "transform 0.2s ease, opacity 0.2s ease",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.85,
                transform: "scale(1.04)",
              },
            }}
          >
            NEENO
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              ml: "auto",
              alignItems: "center",
            }}
          >
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <Typography
                  key={link.name}
                  component="button"
                  onClick={() => scrollToSection(link.id)}
                  sx={{
                    position: "relative",
                    fontFamily: '"SN Pro", sans-serif',
                    fontWeight: 700,
                    letterSpacing: ".12rem",
                    color: isActive ? "#fff6cc" : "rgba(255, 246, 204, 0.78)",
                    textDecoration: "none",
                    fontSize: "1rem",
                    background: "transparent",
                    border: "none",
                    p: 0,
                    pb: 0.6,
                    cursor: "pointer",
                    transition:
                      "transform 0.2s ease, opacity 0.2s ease, color 0.2s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      borderRadius: 999,
                      backgroundColor: "#d9aa1f",
                      transition: "width 0.25s ease",
                    },
                    "&:hover": {
                      opacity: 0.95,
                      transform: "translateY(-1px)",
                      color: "#fff6cc",
                    },
                  }}
                >
                  {link.name}
                </Typography>
              );
            })}
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              ml: "auto",
              color: "#fff6cc",
            }}
            aria-label="Apri menu di navigazione"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            width: 280,
            p: 2,
            backgroundColor: "rgba(15, 15, 15, 0.96)",
            backdropFilter: "blur(10px)",
            color: "#fff6cc",
            borderLeft: "1px solid rgba(245, 196, 0, 0.10)",
            backgroundImage: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "#fff6cc",
            }}
          >
            NEENO
          </Typography>

          <IconButton
            onClick={handleCloseDrawer}
            aria-label="Chiudi menu"
            sx={{ color: "#fff6cc" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <ListItem key={link.name} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => scrollToSection(link.id)}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: isActive
                      ? "rgba(245, 196, 0, 0.10)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(245, 196, 0, 0.20)"
                      : "1px solid transparent",
                    transition:
                      "background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(245, 196, 0, 0.08)",
                      borderColor: "rgba(245, 196, 0, 0.16)",
                      transform: "translateX(-2px)",
                    },
                  }}
                >
                  <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#fff6cc" : "rgba(255, 246, 204, 0.82)",
                      letterSpacing: ".03rem",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
