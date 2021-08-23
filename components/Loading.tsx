/* eslint-disable @next/next/no-img-element */
export default function Loading() {
  return (
    <div className="relative">
      <img
        src="/img/logo_apth_small_grayscale.png"
        className="w-32 opacity-50"
        alt="loading"
      />
      <div className="skeleton-transparent h-full w-32 absolute top-0">
        &nbsp;
      </div>
    </div>
  )
}
