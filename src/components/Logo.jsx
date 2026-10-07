// Décoratif : il est toujours affiché à côté du nom, qui suffit aux lecteurs d'écran.
export default function Logo({ size = 40 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            aria-hidden="true"
            focusable="false"
            className="logo"
        >
            <rect width="64" height="64" rx="16" fill="#6D28D9" />
            <text
                x="32"
                y="43"
                textAnchor="middle"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="30"
                fontWeight="700"
                fill="#FFFFFF"
            >
                AB
            </text>
        </svg>
    );
}