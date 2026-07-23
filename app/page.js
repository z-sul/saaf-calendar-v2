import { internalEvents } from "./data/events";

function formatDate(date) {
  return new Intl.DateTimeFormat("ar-SA-u-ca-gregory", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(23,107,58,.12), transparent 32%), linear-gradient(180deg,#eef5f1 0%,#ffffff 100%)",
        padding: "28px 16px",
        color: "#12251a",
      }}
    >
      <section style={{ maxWidth: "940px", margin: "0 auto" }}>
        <header
          style={{
            background: "#ffffff",
            border: "1px solid #dfe8e2",
            borderRadius: "28px",
            padding: "46px 24px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(20,70,40,.10)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/logo.png"
              alt="شعار الاتحاد السعودي للسهام"
              style={{
                width: "210px",
                maxWidth: "60vw",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          <div
            style={{
              display: "inline-block",
              marginTop: "18px",
              padding: "8px 16px",
              background: "#edf6ef",
              color: "#176b3a",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            الموسم الرياضي 2026 / 2027
          </div>

          <h1
            style={{
              margin: "18px auto 0",
              fontSize: "clamp(32px,6vw,52px)",
              lineHeight: 1.4,
              fontWeight: 800,
              maxWidth: "780px",
            }}
          >
            البرنامج الزمني الداخلي للاتحاد السعودي للسهام
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: "20px auto 0",
              color: "#647269",
              fontSize: "18px",
              lineHeight: 2,
              textAlign: "center",
            }}
          >
            يضم هذا البرنامج البطولات والمعسكرات والدورات والاختبارات والفعاليات
            الداخلية للاتحاد السعودي للسهام للموسم الرياضي{" "}
            <strong>2026 / 2027</strong>، ويتم تحديثه بشكل دوري وفق آخر
            المستجدات.
          </p>

          <a
            href="/api/calendar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "28px",
              padding: "16px 32px",
              borderRadius: "14px",
              background: "#176b3a",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: 800,
              boxShadow: "0 12px 28px rgba(23,107,58,.25)",
            }}
          >
            ↓ تحميل البرنامج الزمني الداخلي
          </a>
        </header>

        <section
          style={{
            marginTop: "20px",
            background: "#ffffff",
            border: "1px solid #dfe8e2",
            borderRadius: "22px",
            padding: "28px 22px",
            boxShadow: "0 14px 36px rgba(0,0,0,.05)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div
              style={{
                fontSize: "46px",
                fontWeight: 800,
                color: "#176b3a",
              }}
            >
              {internalEvents.length}
            </div>
            <div style={{ fontSize: "18px", fontWeight: 700 }}>
              فعالية داخلية
            </div>
          </div>

          <h2
            style={{
              textAlign: "center",
              fontSize: "27px",
              margin: "0 0 22px",
            }}
          >
            البرنامج الزمني الداخلي
          </h2>

          <div style={{ display: "grid", gap: "12px" }}>
            {internalEvents.map((event) => (
              <article
                key={event.id}
                style={{
                  padding: "19px",
                  border: "1px solid #e3e9e5",
                  borderRadius: "15px",
                  background: "#f8faf8",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h3 style={{ margin: "0 0 6px", fontSize: "20px" }}>
                      {event.title}
                    </h3>

                    {event.note ? (
                      <div
                        style={{
                          color: "#176b3a",
                          fontSize: "15px",
                          marginBottom: "5px",
                        }}
                      >
                        {event.note}
                      </div>
                    ) : null}

                    <div style={{ color: "#607067", lineHeight: 1.9 }}>
                      من {formatDate(event.startDate)} إلى{" "}
                      {formatDate(event.endDate)}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "7px 12px",
                      borderRadius: "999px",
                      background: "#edf6ef",
                      color: "#176b3a",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {event.location}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer
          style={{
            textAlign: "center",
            padding: "28px 10px 4px",
            color: "#758178",
          }}
        >
          © الاتحاد السعودي للسهام
        </footer>
      </section>
    </main>
  );
}
