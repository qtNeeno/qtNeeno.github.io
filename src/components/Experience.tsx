import { Box, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { experienceData } from "../experienceData";

dayjs.extend(customParseFormat);

// Restituisco la data di inizio dell'esperienza
const getStartDateValue = (period: string) => {
  const [startPart] = period.split(" - ");

  return dayjs(startPart.trim(), "MMM YYYY").valueOf();
};

const Experience = () => {
  // Ordino le esperienze dalla più recente alla più vecchia,
  // indipendentemente dall'ordine con cui sono salvate nell'array
  const sortedExperienceData = [...experienceData].sort(
    (a, b) => getStartDateValue(b.period) - getStartDateValue(a.period)
  );
  return (
    <Box
      id="experience"
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
          sx={{
            textAlign: "center",
            fontFamily: '"Archivo Black", sans-serif',
            fontSize: { xs: "2.4rem", md: "3.2rem" },
            mb: { xs: 5, md: 7 },
            background:
            "linear-gradient(90deg, #fff0a6 0%, #f5c400 48%, #8a6a00 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Experience
          <Box
            component="span"
            sx={{
              color: "#d9aa1f",
            }}
          >
            .
          </Box>
        </Typography>
        <Stack spacing={{ xs: 4, md: 5 }}>
          {sortedExperienceData.map((item) => (
            <Box
              key={`${item.period}-${item.company}-${item.title}`}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "180px 1fr" },
                gap: { xs: 1.5, md: 4 },
                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  color: "#d9aa1f",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  lineHeight: 1.6,
                  pt: { xs: 0, md: 0.3 },
                }}
              >
                {item.period}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    color: "#fff6cc",
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                  <Box
                    component="span"
                    sx={{
                      color: "rgba(255, 246, 204, 0.72)",
                      fontWeight: 500,
                    }}
                  >
                    {` | ${item.company}`}
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    mt: 1.2,
                    color: "rgba(255, 246, 204, 0.76)",
                    fontSize: "0.96rem",
                    lineHeight: 1.8,
                    maxWidth: 820,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Experience;
