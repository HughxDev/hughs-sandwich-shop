export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

export function formatDate(iso8601) {
  const dateFormat = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  let lastDatePart = "";
  const formatted = dateFormat
    .formatToParts(new Date(iso8601))
    .map(({ type, value }) => {
      if (type !== "literal") {
        lastDatePart = type;
      }

      if (lastDatePart === "day" && type === "literal") {
        return " @ ";
      }

      return value;
    })
    .join("");

  return formatted;
}
