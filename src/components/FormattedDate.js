export function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()} now</h2>
}