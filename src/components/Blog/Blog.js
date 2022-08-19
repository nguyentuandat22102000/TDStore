import React from 'react';
import Blogs from '../../asset/image/blog.jpg';

const Blog = () => {
    return (
      <div className="w-full mb-10">
        <h1 className="text-center py-6">Blogs</h1>
        <div className="container__wide grid grid-cols-2 ">
          <div className="col-span-1 md:col-span-2 text-center box__shadow px-4 mx-2">
            <h1 className="mt-8 text__shadow__2">#lookbook</h1>
            <p className="py-4 font-light text-gray-500">
              Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
              velit. Vestibulum malesuada aliquet libero viverra cursus. Aliquam
              erat volutpat. Morbi id dictum quam, ut commodo lorem. In at nisi
              nec arcu porttitor aliquet vitae at dui. Sed sollicitudin nulla
              non leo viverra scelerisque. Phasellus facilisis lobortis metus,
              sit amet viverra lectus finibus ac. Aenean non felis dapibus,
              placerat libero auctor, ornare ante. Morbi quis ex eleifend,
              sodales nulla vitae, scelerisque ante. Nunc id vulputate dui.
              Suspendisse consectetur rutrum metus nec scelerisques
            </p>
            <div>
              <button className="btn btn__secondary" type="button">
                View
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 h-[400px] w-full px-4 mx-2">
            <img
              alt="Blog Fashion"
              src={Blogs}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full text-center my-8">
                <button className="btn btn__primary"> Load More</button>
        </div>
      </div>
    );
}

export default Blog;
