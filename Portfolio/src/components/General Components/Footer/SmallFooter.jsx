const jaar = new Date().getFullYear();

const SmallFooter = () => {
  return (
    <div className="w-full px-auto py-5 text-center border-t">
      &copy; {jaar} Milan Dhondt - Alle rechten voorbehouden
    </div>
  )
}

export default SmallFooter;